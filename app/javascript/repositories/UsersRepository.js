import { apiV1UsersPath, apiV1UserPath } from 'routes/ApiRoutes';
import FetchHelper from 'utils/fetchHelper';

export default {
  index(params) {
    const path = apiV1UsersPath();
    return FetchHelper.get(path, params);
  },

  show(id) {
    const path = apiV1UserPath(id);
    return FetchHelper.get(path);
  },

  update(id, user = {}) {
    const path = apiV1UserPath(id);
    return FetchHelper.put(path, { user });
  },

  create(user = {}) {
    const path = apiV1UsersPath();
    return FetchHelper.post(path, { user });
  },

  destroy(id) {
    const path = apiV1UserPath(id);
    return FetchHelper.delete(path);
  },
};
