import PropTypes from 'prop-types'; // Import PropTypes for validation

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
  );
};

// Add PropTypes validation
ResumeModal.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Validate that imageUrl is a string and required
  onClose: PropTypes.func.isRequired,    // Validate that onClose is a function and required
};

export default ResumeModal;
