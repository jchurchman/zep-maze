import { connect } from 'react-redux';
import Modal from './Modal';
import { closeModal } from './Modal.actions';
import { resetMaze } from '../Controller/Controller.actions';
import { getOneMaze } from '../MazeAPI/MazeAPI.actions';

function mapStateToProps(state) {
    return {
        modalIsOpen: state.modalIsOpen,
        game: state.game
    }
}

const mapDispatchToProps = dispatch =>  {

    return {
        closeModal() { dispatch(closeModal());},
        resetMaze() {dispatch(resetMaze());},
        getNextMaze(id) {dispatch(getOneMaze(id))}
    }
}

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;