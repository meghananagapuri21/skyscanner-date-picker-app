import React, { useState } from 'react';
import BpkCalendar from 'bpk-component-calendar';
import BpkButton from 'bpk-component-button';
import 'bpk-component-calendar/dist/style.css';
import 'bpk-component-button/dist/style.css';

const App = () => {
  const [date, setDate] = useState(null);

  return (
    <div>
      <h1>Flight Schedule</h1>

      <BpkCalendar
        id="calendar"
        onDateSelect={selectedDate => setDate(selectedDate)}
        date={date}
      />

      <div style={{ marginTop: '20px' }}>
        <BpkButton>
          Continue
        </BpkButton>
      </div>
    </div>
  );
};

export default App;