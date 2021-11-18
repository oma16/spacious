import React,{useState,useEffect} from 'react'
import {Offcanvas, Button,Card,Container,Row ,Col} from 'react-bootstrap'
import Planetdetails from './Planetdetails';
import './strapi assets/planets/planet-1.svg';
import './strapi assets/planets/planet-2.svg';
import './strapi assets/planets/planet-3.svg';
import './strapi assets/planets/planet-4.svg';
import './strapi assets/planets/planet-5.svg';
import './strapi assets/planets/planet-6.svg';
import './strapi assets/planets/planet-7.svg';
import './strapi assets/planets/planet-8.svg';
import './strapi assets/planets/planet-9.svg';

import './strapi assets/characters/character-1.png';
import './strapi assets/characters/character-2.png'
import './strapi assets/characters/character-3.png'
import './strapi assets/characters/character-4.png'
import './strapi assets/characters/character-5.png'
import './strapi assets/characters/character-6.png'
import './strapi assets/characters/character-7.png'
import './strapi assets/characters/character-8.png'
import './strapi assets/characters/character-9.png'
import './strapi assets/characters/character-10.png'
import './strapi assets/characters/character-11.png'
import './strapi assets/characters/character-12.png'
import './strapi assets/characters/character-13.png'
import './strapi assets/characters/character-14.png'
import './strapi assets/characters/character-15.png'
import './strapi assets/characters/character-16.png'





function OffCanvasExample({ name, ...props }) {

  const Planets=[
    {
        "id": 1,"image":"./strapi assets/planets/planet-1.svg","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","planetname":" Planet Alpha","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
          }]
    },
    {
        "id": 2,"image":"./strapi assets/planets/planet-2.svg","planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","numOffriends":23
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","numOffriends":23
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","numOffriends":23
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","numOffriends":23
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","numOffriends":23
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","numOffriends":23
      }]
    },
    {
        "id": 3,"image":"./strapi assets/planets/planet-3.svg","planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {
            "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 4,"image":"./strapi assets/planets/planet-4.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235, "character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 5,"image":"./strapi assets/planets/planet-5.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 6,"image":"./strapi assets/planets/planet-6.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 7, "image":"./strapi assets/planets/planet-7.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.", "num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 8,"image":"./strapi assets/planets/planet-8.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 9,"image":"./strapi assets/planets/planet-9.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    
    {
        "id": 10,"image":"./strapi assets/planets/planet-8.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
        },
        {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
        },
        {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
        }
        ]
    },
    {
        "id": 11,"image":"./strapi assets/planets/planet-9.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","numOffriends":23
        },
        {
            "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","numOffriends":23
        }
        ]
    },
    {
        "id": 12,
        "image":"./strapi assets/planets/planet-6.svg",
        "planetname":" Planet Alpha",
        "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.",
        "num":235,
        "character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
          }]
    },
    {
        "id": 13,
        "image":"./strapi assets/planets/planet-2.svg",
        "planetname":" Planet Alpha",
        "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.",
        "num":235,
        "character" :[

        ]
    },
    {
        "id": 14,"image":"./strapi assets/planets/planet-5.svg", "planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {
            "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","numOffriends":23
        },
        {
            "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "numOffriends":23

        },
        {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","numOffriends":23
        }
        ]
    },
    {
        "id": 15,"image":"./strapi assets/planets/planet-5.svg","planetname":" Planet Alpha", "description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num":235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","numOffriends":23
        },
        {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","numOffriends":23
        },
        {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","numOffriends":23
        },
        
        {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","numOffriends":23
        },
        {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","numOffriends":23
        }
        ]

    },
    {
        "id": 16,"image":"./strapi assets/planets/planet-1.svg","planetname":" Planet Alpha","description": "Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.","num": 235,"character" :[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","numOffriends":23
          },
          {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","numOffriends":23
          },
          {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","numOffriends":23
          },
          {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","numOffriends":23
          },
          {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","numOffriends":23
          },
          {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","numOffriends":23
          }]
    }
   

]
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [planets,setPlanets] = useState(Planets);
    const handleDisplay=(id)  =>{
        const newDisplay = planets.filter(planet=>planet.id !== id);
        setPlanets(newDisplay);
      }
    
 return (
            <>
             <div className="mb-5">
        
        <Container>
                <Row >
            {planets.map((planet) => (
                
                <Col sm={4} md ={3} xl={3} xs={12}  className ="" >
                <div className="planet-view" key={planet.id}>
                
               
  <Card className="mt-4 cardradius"  onClick={handleShow}>
                  <Card.Img variant="top" src={planet.image} className="img-fluid planetimg"/>
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
        
        
      
        
  {planets.filter((planet,index) => planet.id == [index]+1).map(filteredplanet => (
             
              <div >
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                   <Offcanvas.Title ></Offcanvas.Title>

               </Offcanvas.Header>
               <Offcanvas.Title className="navibar mx-3">{filteredplanet.planetname}</Offcanvas.Title>
               <Offcanvas.Body  data-bs-scroll="true" >
                 <p> {filteredplanet.description}</p>
                <h5>Population</h5>
                    <p>{filteredplanet.num}</p>
                         <div className="d-flex flex-row justify-content-between mt-5">
                         < h5 className="text-muted ">CHARACTERS</h5>
                        
                <Planetdetails/>
            

                         </div>
                    
               {filteredplanet.character.map(charact =>{
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
         
                    
            </Offcanvas.Body>
            </Offcanvas>     
                
      </div>

    )
            
   )}
            
    
         
        
              
              
            </>
          );
    
   }
  
  function Example() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
  export default Example;