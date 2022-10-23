import react, { useState, useEffect } from "react"
import Select from 'react-select';

function ViewUser() {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
      const getAllUsers = async () =>{
        try{
          const {data}  = await axios.get('/users/getusers');
          setUserData(data);
          console.log(data);
        }catch(error){
          console.log(error);
        }
      };
      getAllUsers();
  },[] );
  
    const [selectedOption, setSelectedOption] = useState([
        { value: 'salik', label: 'Laibach687@gmail.com', uCell: "031573432", uAge: 18 },
        { value: 'ali', label: 'Sabach897@gmail.com', uCell: "031573432", uAge: 18 },
        { value: 'ahmed', label: 'Aizach@gmail.com', uCell: "031573432", uAge: 18 }
    ])

    const [users, setUser] = useState([

        { uName: 'salik', uEmail: 'Laibach687@gmail.com', uCell: "031573432", uAge: 18 },
        { uName: 'ali', uEmail: 'Sabach897@gmail.com', uCell: "031573432", uAge: 18 },
        { uName: 'ahmed', uEmail: 'Aizach@gmail.com', uCell: "031573432", uAge: 18 }


    ])
    const handleChange = (selected) => {
        let array = users.filter(item => item.uEmail === selected.label)
        if (array.length > 0) {
            setUser(array);
        }
        console.log("selected", selected)

    }
    console.log("users", users)
    return (
        <div>
            <Select
                defaultValue={{ value: 'All', label: 'All' }}
                value={selectedOption}
                isSearchable
                onChange={handleChange}
                options={selectedOption}
            />
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>

                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (<tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.uName}</td>
                                <td>{item.uEmail}</td>
                                <td>{item.uCell}</td>
                                <td>{item.uAge}</td>

                            </tr>
                            )
                        })

                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default ViewUser;