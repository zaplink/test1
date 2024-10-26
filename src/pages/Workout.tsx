
import '../workout.css';
import gymPhoto from '/src/gym.avif';

function Workout() {
  return (
    
    <div className="App">
      <h1>Go to Gym</h1>
      <br></br>
      <div className='photo'>
        <img src={gymPhoto} style={{ width: '300px', height: '500px' }} />


      </div>

      <div className="exercise-section">
        <h3>Bench Press (Barbell or Dumbbell):</h3>
        <p>4 sets of 8-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Incline Dumbbell Press:</h3>
        <p>4 sets of 8-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Chest Dips:</h3>
        <p>3 sets of 8-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Cable Chest Flyers:</h3>
        <p>4 sets of 10-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Tricep Dips:</h3>
        <p>3 sets of 8-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Tricep Rope Pushdowns:</h3>
        <p>3 sets of 10-12 reps</p>
      </div>

      {/* ... other exercises ... */}

      <div className="button-section">
        <button>Go Back to Agenda Page</button>
      </div>
    </div>
  );
}

export default Workout;