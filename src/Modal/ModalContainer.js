import { connect } from 'react-redux';
import Modal from 'react-modal';
import { openModal, returnToMaze, nextMaze } from './Modal.actions';

function mapStateToProps(state) {
    const { modalIsOpen } = state.modal;

    return {
        modalIsOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openModal() { dispatch(openModal());},
        returnToMaze() { dispatch(returnToMaze());},
        nextMaze() { dispatch(nextMaze());}
    }
}

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;