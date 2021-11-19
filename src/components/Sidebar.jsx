import React,{useState} from 'react'
import {Offcanvas,Card,Container,Row ,Col} from 'react-bootstrap'
import Planetdetails from './Planetdetails';
import planet1 from '../planets/planet-1.svg'
import planet2 from '../planets/planet-2.svg'
import planet3 from '../planets/planet-3.svg'
import  planet4 from '../planets/planet-4.svg'
import  planet5 from '../planets/planet-5.svg'
import planet6 from '../planets/planet-6.svg'
import  planet7  from '../planets/planet-7.svg'
import planet8 from '../planets/planet-8.svg'
import  planet9 from'../planets/planet-9.svg'

import  character1 from '../characters/character-1.png'
import character2 from '../characters/character-2.png'
import character3 from '../characters/character-3.png'
import character4 from '../characters/character-4.png'
import character5 from '../characters/character-5.png'
import character6 from '../characters/character-6.png'
import character7 from '../characters/character-7.png'
import character8 from '../characters/character-8.png'
import character9 from '../characters/character-9.png'
import character10 from '../characters/character-10.png'
import character11 from '../characters/character-11.png'
import character12 from '../characters/character-12.png'
import character13  from '../characters/character-13.png'
import character14 from '../characters/character-14.png'
import character15 from '../characters/character-15.png'
import character16 from '../characters/character-16.png'


function Planetside({ name, ...props }) {

  const Planets=[
    {
        "id": 1,"image":planet1,"description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","planetname":" Planet Alpha","num":235,"character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
          }]
    },
    {
        "id": 2,"image":planet2,"planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {"id": 1,"image":character7,"charname":"Jerome Bell","numOffriends":23
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","numOffriends":23
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","numOffriends":23
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","numOffriends":23
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","numOffriends":23
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","numOffriends":23
      }]
    },
    {
        "id": 3,"image":planet3,"planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {
            "id": 1,"image":character13,"charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":character14,"charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":character15,"charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":character16,"charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 4,"image":planet4,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235, "character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 5,"image":planet5,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":character7,"charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":character8,"charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":character9,"charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":character10,"charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":character11,"charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":character12,"charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 6,"image":planet6,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":character13,"charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":character14,"charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":character15,"charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":character16,"charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 7, "image":planet7,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 8,"image":planet8,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":character7,"charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":character8,"charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":character9,"charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":character10,"charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":character11,"charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":character12,"charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 9,"image":planet9,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":character13,"charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":character14,"charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":character15,"charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":character16,"charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    
    {
        "id": 10,"image":planet8,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 11,"image":planet9,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":character7,"charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":character8,"charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":character9,"charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":character10,"charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":character11,"charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":character12,"charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 12,
        "image":planet6,
        "planetname":" Planet Alpha",
        "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.",
        "num":235,
        "character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
          }]
    },
    {
        "id": 13,
        "image":planet2,
        "planetname":" Planet Alpha",
        "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.",
        "num":235,
        "character" :[

        ]
    },
    {
        "id": 14,"image":planet5, "planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":character13,"charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":character14,"charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":character15,"charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":character16,"charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 15,"image":planet5,"planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":character7,"charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":character8,"charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":character9,"charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":character10,"charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":character11,"charname":" Cody Fisher","numOffriends":23
        }
        ]

    },
    {
        "id": 16,"image":planet1,"planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num": 235,"character" :[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":character2,"charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":character3,"charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":character4,"charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":character5,"charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":character6, "charname":" Marvin McKinney","numOffriends":23
          }]
    }
   

]


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [planetinfo,setPlanetinfo] = useState("");
    const handleShow = (planet) =>{
      setPlanetinfo(planet);
      setShow(true);
    };
    
    
 return (
            <>
             <div className="mb-5">
        
        <Container>
                <Row >
            {Planets.map((planet) => (
                
                <Col sm={4} md ={3} xl={3} xs={12}  className ="" >
                <div className="planet-view" >
                
               
  <Card className="mt-4 cardradius"  onClick={ () =>handleShow(planet)} key={Planets.id}>
                  <img variant="top" src={planet.image} alt="planet" className="img-fluid planetimg"/>
                      <Card.Body>
                      <Card.Title>{planet.planetname}</Card.Title>
                      <Card.Text>pop: {planet.num}</Card.Text>
                                                            
                  </Card.Body>
                                                          
  </Card>                      
           </div>
               
                </Col>
                            
               )) }
          </Row>
          
        </Container> 
        
        </div>
      
              <div >
            <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="mt-5 rounded cardius">
                <Offcanvas.Header closeButton>
                   <Offcanvas.Title ></Offcanvas.Title>

               </Offcanvas.Header>
               <Offcanvas.Title className="header mx-3">{planetinfo.planetname}</Offcanvas.Title>
               <Offcanvas.Body  data-bs-scroll="true" >
                 <p> {planetinfo.description}</p>
                <h5>Population</h5>
                    <p>{planetinfo.num}</p>
                         <div className="d-flex flex-row justify-content-between mt-5">
                         < h5 className="text-muted ">CHARACTERS</h5>
                        
                <Planetdetails/>
            

                         </div>
            {Planets.map(planet =>{
              return(
                <div>
                   {planet.character.map(charact =>{
                  return (
                    <div  key={charact.id}> 

                    
        <div className="mt-3 d-flex "  >
              <img variant="top" src={charact.image} className="img-fluid w-50 h-75 cardradius mx-2 " alt="character"/>
                      <div  className="justify-content-center align-item-center d-flex flex-column" >
                      <h6 className="spaces">{charact.charname}</h6>
                      <p>{charact.numOffriends} Friends</p>
                                                            
                  </div>
                                                          
  </div>           
                  
            </div>
           
          )
        })}
         
                </div>
              )
            }
              
              )}
                    
              
                    
            </Offcanvas.Body>
            </Offcanvas>     
                
      </div>

    
            
    
         
        
              
              
            </>
          );
    
   }
  
 
  
  export default Planetside;