import { useEffect, useRef } from "react";

const FeedBackModal = ({
  showModal,
  setShowModal,
  feedback,
  setFeedback,
  handleDeny,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      textareaRef.current.focus();
    }
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    setFeedback("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDeny();
    closeModal();
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Provide Feedback</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                ref={textareaRef}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback..."
              />
              <div className="modal-actions">
                <button type="submit">Deny</button>
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBackModal;
