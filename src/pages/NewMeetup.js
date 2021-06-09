import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useHistory }  from 'react-router-dom'

function NewMeetupPage(){
   const history = useHistory();

    function addMeetupHandler(meetupData){
        fetch('https://react-test-26976-default-rtdb.firebaseio.com/meetups.json',{
            method: 'POST', 
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(() =>{
            history.replace('/')
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>

    </section>
}

export default NewMeetupPage;