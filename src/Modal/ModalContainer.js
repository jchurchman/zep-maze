import { connect } from 'react-redux';
import Modal from './Modal';
import { closeModal } from './Modal.actions';
import { resetMaze } from '../Controller/Controller.actions';

function mapStateToProps(state) {
    return {
        modalIsOpen: state.modalIsOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal() { dispatch(closeModal());},
        resetMaze() {dispatch(resetMaze());},
    }
}

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;