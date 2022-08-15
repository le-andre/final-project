import React from 'react';

export default function HowToPlay(props) {
  return (
    <div className=''>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" id='modal-background'>
            <div className="modal-header">
              <h5 className="modal-title text-center" id="modal-titles">Game Explanation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Guess the programming language as fast as possible!
            </div>
            <div className="modal-body">
              User will receive a score based off of how fast user figures out the word!
            </div>
            <div className="modal-body">
              If you correctly guess the word, you can submit your score after, if logged in.
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}
