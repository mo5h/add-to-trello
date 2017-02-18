import 'libs/vendor/trello-client';
import storage from 'libs/storage';

const APP_KEY = process.env.TRELLO_APP_KEY;
const TOKEN = 'trello_token';

Trello.setKey(APP_KEY);
Trello.setToken(localStorage.getItem(TOKEN));

export const isAuthorized = () => {
  return !! localStorage.getItem(TOKEN);
};

export const authorize = (success, error) => {
  const name = 'Add to Trello';
  const expiration = 'never';
  const scope = {
    read: true,
    write: true,
    account: false
  };

  Trello.authorize({
    name,
    expiration,
    scope,
    success,
    error
  });
};

export const deauthorize = () => {
  Trello.deauthorize();
  storage.clearData();
};

export const submitCard = (data, callback) => {
  const options = {
    name: data['card-title'],
    desc: data['card-description'],
    date: null,
    pos: data['position'],
    idList: data['list'],
    urlSource: null
  };

  Trello.rest(
    'POST',
    'cards',
    options,
    () => callback(),
    (err) => callback(err)
  );
};

export const getOrgs = (callback) => {
  Trello.rest(
    'GET',
    'members/me/organizations',
    (orgs) => callback(null, orgs),
    (err) => callback(err)
  );
};

export const getBoards = (callback) => {
  const options = {
    filter: 'open',
    lists: 'open'
  };

  Trello.rest(
    'GET',
    'members/me/boards',
    options,
    (boards) => callback(null, boards),
    (err) => callback(err)
  );
};

export const getOrgsAndBoards = (callback) => {
  const orgs = storage.getOrgs();
  if (orgs) {
    return callback(null, orgs);
  }

  const orgList = {
    me: { name: 'Boards', boards: [] }
  };

  getOrgs((err, orgs) => {
    if (err) {
      // TODO: whoops!
      console.error(err);
    }

    $.each(orgs, (key, org) => {
      orgList[org.id] = {
        name: org.displayName,
        boards: []
      };
    });

    getBoards((err, boards) => {
      if (err) {
        // TODO: whoops!
        console.error(err);
      }

      $.each(boards, (key, board) => {
        // add board to either it's organization or the 'me' catchall
        const organization = orgList[board.idOrganization || 'me'];

        // make sure the organization we're trying to add
        // the board to exists
        if (organization !== undefined) {
          organization.boards.push(board);
        } else {
          // if the organization the board belongs to
          // wasn't added above for whatever reason,
          // add the board to the 'me' catchall
          orgList['me'].boards.push(board);
        }
      });

      storage.setOrgs(orgList);
      callback(null, orgList);
    });
  });
};
