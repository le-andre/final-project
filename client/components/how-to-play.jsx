import React from 'react';

export default function HowToPlay(props) {
  return (
    <div className=''>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-background modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Guess the NOTWORDLE in Six tries.
            </div>
            <div className="modal-body">
             Each guess must be a valid five-letter word. Hit the enter button to submit.
            </div>
            <div className="modal-body">
              After each guess, the color of the tiles will change to show how close your guess was to the word.
            </div>
            <div className="modal-footer">
              <div className="modal-example modal-body">
              Examples
              </div>
              <img className="modal-image" src='images/weary.png'></img>
              <div className="modal-body">
                The letter W is in the word and in the correct spot.
              </div>
              <img className="modal-image" src='images/pills.png'></img>
              <div className="modal-body">
                The letter I is in the word but in the wrong spot.
              </div>
              <img className="modal-image" src='images/vagues.png'></img>
              <div className="modal-body">
                The letter W is not in the word in any spot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
