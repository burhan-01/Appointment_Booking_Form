$(document).ready(function() {
 
    const timeSlots = {
        "Monday": ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"],
        "Tuesday": ["12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"],
        "Wednesday": ["03:00 PM - 04:00 PM", "04:00 PM - 05:00 PM", "05:00 PM - 06:00 PM"],
        "Thursday": ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"],
        "Friday": ["12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM"]
    };

    const today = new Date().toISOString().split('T')[0]; 
    $('#date').attr('min', today); 
    $('#date').on('change', function() {
        const selectedDate = new Date($(this).val());
       
        if (!$(this).val()) {
            return;
        }
        
        const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
        console.log("Selected day:", dayOfWeek);
        
        const $timeSlot = $('#time-slot');
        $timeSlot.empty();
        if (timeSlots[dayOfWeek]) {
            $timeSlot.append('<option value="" disabled selected>Select a time slot</option>');
            timeSlots[dayOfWeek].forEach(slot => {
                $timeSlot.append(`<option value="${slot}">${slot}</option>`);
            });
        } else {
            $timeSlot.append('<option value="" disabled>No available slots</option>');
        }
    });

    $('#appointment-form').on('submit', function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const date = $('#date').val();
        const timeSlot = $('#time-slot').val();

        if (name && email && date && timeSlot) {
            alert(`Appointment booked for ${name} on ${date} at ${timeSlot}`);
        } else {
            alert("Please fill all fields before submitting the form.");
        }
    });
});
