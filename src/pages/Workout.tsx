
import '../workout.css';

function Workout() {
  return (
    <div className="App">
      <h1>Go to Gym</h1>

      <div className="exercise-section">
        <h3>Bench Press (Barbell or Dumbbell):</h3>
        <p>4 sets of 8-12 reps</p>
      </div>

      <div className="exercise-section">
        <h3>Incline Dumbbell Press:</h3>
        <p>4 sets of 8-12 reps</p>
      </div>

      {/* ... other exercises ... */}

      <div className="button-section">
        <button>Go Back to Agenda Page</button>
      </div>
    </div>
  );
}

export default Workout;