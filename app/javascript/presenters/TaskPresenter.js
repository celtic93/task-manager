import PropTypes from 'prop-types';
import PropTypesPresenter from 'utils/PropTypesPresenter';
import UserPresenter from 'presenters/UserPresenter';

export default new PropTypesPresenter(
  {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    state: PropTypes.string,
    expired_at: PropTypes.string,
    transitions: PropTypes.shape(),
    author: UserPresenter.shape(),
    assignee: UserPresenter.shape(),
  },
  {
    cardTitle(task) {
      return `Task # ${task.id} [${task.name}]`;
    },
  },
);
