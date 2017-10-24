import { connect } from 'react-redux';
import Modal from './Modal';
import { openModal, closeModal } from './Modal.actions';

function mapStateToProps(state) {
    const { modalIsOpen } = state.modal;

    return {
        modalIsOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal() { dispatch(closeModal());},
        restartMaze() {dispatch(restartMaze());},
        nextMaze() {dispatch(nextMaze());}
    }
}

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;