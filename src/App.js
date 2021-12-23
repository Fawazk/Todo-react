import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2'
import { useState } from 'react'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1 className="text-center p-3 text-danger">TODO liST</h1>
      </div>

      {/* <div className="text-center subHeading">
        <br />
        <h2></h2>
      </div> */}
      <div className="d-flex justify-content-center align-items-center container">

        <div><input className='p-3 m-3' value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item" />
          <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false, Boolean: false }])} className="fas fa-plus"></i></div>

      </div>
      <div className="container">
        <div className="">

        </div>
        <div className="container mt-4">
          <div className="nav nav-tabs shadow" id="nav-tab" role="tablist">
            <button className="nav-link col-4 p-3 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">pending</button>
            <button className="nav-link col-4 p-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Completed </button>
            <button className="nav-link col-4 p-3" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Deleted</button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              {toDos.map((obj) => {
                if (obj.status !== true && obj.Boolean !== true) {
                  return (<div className="d-flex justify-content-between p-3 shadow m-3">

                    <input className=' border' onChange={(e) => {
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id && obj2.Boolean !== true) {
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} value={obj.status} type="checkbox" name="" id="" />
                    <p>{obj.text}</p>
                    {/* edit */}
                    <i className="fas fa-edit" onClick={async() => {
                      const { value: text } = await Swal.fire({
                        input: 'text',
                        inputLabel: 'Message',
                        inputPlaceholder: 'Type your message here',
                        inputAttributes: {
                          'aria-label': 'Type your message here'
                        },
                        showCancelButton: true
                      })
                      
                      if (text) {
                        console.log(text)
                        setToDos(toDos.filter(obj2=>{
                          if(obj2.id===obj.id ){
                            obj2.text=text
                          }
                          return obj2
                        }))
                        
                      }
                      
                      
                    }} value={obj.status}></i>
                    {/* delete */}
                    <i className="fas fa-times" onClick={(e) => {

                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.Boolean = true
                        }
                        return obj2
                      }))
                    }} value={obj.status}></i>
                  </div>)
                }
              })}
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              {toDos.map((obj) => {
                if (obj.status) {
                  return (<h3 className="text-center p-3 shadow m-3">{obj.text}</h3>)
                }
                return null
              })}
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              {toDos.map((obj) => {
                if (obj.Boolean) {
                  return (<h3 className="text-center p-3 shadow m-3">{obj.text}</h3>)
                }
                return null
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
