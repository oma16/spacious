import React,{useState} from 'react'
import {Offcanvas, Card,Container,Row ,Col,Form} from 'react-bootstrap'
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




function Charside({ name, ...props }) {
  const Characters = [
    {"id": 1,"image":character1, "planetname":"Alpha","charname":" Brooklyn Simmons","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","numOffriends":"23", "friends":[
      {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 2,"image":character2,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cameron Williamson","numOffriends":"23", "friends":[
      {"id": 1,"image":character1,"charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character2,"charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character3,"charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":character4,"charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character5,"charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":character6, "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 3,"image":character3,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Leslie Alexander","numOffriends":"23","friends":[
      {
          "id": 1,"image":character13,"charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":character14,"charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character15,"charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":character16,"charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 4,"image":character4, "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Kristin Watson","numOffriends":"23", "friends":[
      {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 5,"image":character5,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Jenny Wilson","numOffriends":"23", "friends":[
      {"id": 1,"image":character1,"charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character2,"charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character3,"charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":character4,"charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character5,"charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":character6, "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 6,"image":character6, "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Marvin McKinney","numOffriends":"23","friends":[
      {
          "id": 1,"image":character13,"charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":character14,"charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character15,"charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":character16,"charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 7,"image":character7,"planetname":"Alpha", "description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":"Jerome Bell","numOffriends":"23", "friends":[
      {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 8,"image":character8, "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Guy Hawkins","numOffriends":"23", "friends":[
      {"id": 1,"image":character1,"charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character2,"charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character3,"charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":character4,"charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character5,"charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":character6, "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 9,"image":character9,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":"Robert Fox","numOffriends":"23","friends":[
      {
          "id": 1,"image":character13,"charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":character14,"charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character15,"charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":character16,"charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    
    {"id": 10, "image":character10,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Eleanor Pena","numOffriends":"23", "friends":[
      {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 11,"image":character11,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cody Fisher","numOffriends":"23", "friends":[
      {"id": 1,"image":character1,"charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character2,"charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character3,"charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":character4,"charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character5,"charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":character6, "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {
        "id": 12,"image":character12,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Courtney Henry","numOffriends":"23","friends":[
          {
              "id": 1,"image":character13,"charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {
              "id": 2,"image":character14,"charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":character15,"charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  
          },
          {"id": 4,"image":character16,"charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
      ]
      },
    {
        "id": 13,"image":character13,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Annette Black","numOffriends":"23", "friends":[
          {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          
          {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {
              "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
      ]
      },
    {
        "id": 14,"image":character14,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Brooklyn Williams","numOffriends":"23", "friends":[
          {"id": 1,"image":character1,"charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 2,"image":character2,"charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":character3,"charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 4,"image":character4,"charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 5,"image":character5,"charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 6,"image":character6, "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
    
      ]
      },
    {"id": 15,"image":character15,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Kristin Williamson", "numOffriends":"23","friends":[
      {
          "id": 1,"image":character13,"charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":character14,"charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character15,"charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":character16,"charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
    },
    {"id": 16,"image":character16,"planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cameron Watson","numOffriends":"23", "friends":[
      {"id": 1,"image":character7,"charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":character8,"charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":character9,"charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":character10,"charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":character11,"charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":character12,"charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  }
   
  
  ]
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    
    const [charinfo,setCharinfo] = useState("");
    const handleShow = (character) =>{
      setCharinfo(character);
      setShow(true);
    };
    
     
return (
            <>
             <div className="mb-5">
               <div className="d-flex justify-content-end">
                 <Form.Select aria-label="Default select example" className="selectt">
                    <option>Planet:All</option>
                    <option value="1">Planet Alpha</option>
                    <option value="2">Planet Gamma</option>
                    <option value="3">Planet Beta</option>
          </Form.Select>
          </div>
             
        <Container>
        
                <Row >
            {Characters.map((character) => {
            return  (
                
                <Col sm={4} md ={3} xl={3} xs={12}  className ="" >
                <div className="planet-view"  onClick={()=>handleShow(character)} key={character.id}>
                           
  <Card className="mt-4 cardradius " >
                                    
       <Card.Img variant="top" src={character.image} className="cardius img-fluid" />
        <Card.Body>
            <Card.Title>{character.charname}</Card.Title>
            <Card.Text>{character.numOffriends} Friends</Card.Text>
                                                       
        </Card.Body>
                                                            
  </Card>                                                    
              </div>
               
                </Col>
                            
                          )}) }
          </Row>
          
        </Container> 
        
        </div>
        
           <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="mt-5 rounded cardius">
               <Offcanvas.Header closeButton>
               <Offcanvas.Title className="header">{charinfo.charname}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  data-bs-scroll="true" >
              
                <p> {charinfo.charname} {charinfo.description}</p>
               
                     <div className="d-flex flex-row justify-content-between">
                        
                        <p>Planet <br/> <h5 className="spaces">{charinfo.planetname}</h5></p>
                         <p> Friends <br /> {charinfo.numOffriends}</p>
                         <div></div>
                        </div>
                        < h5 className="text-muted mt-5">FRIENDS</h5>
             {Characters.map(char => (
             
                         <div >   
              {char.friends.map(charact =>{
                 return (
                   <div  key={charact.id}> 

                   
       <div className="mt-3 d-flex "  >
             <img variant="top" src={charact.image} className="img-fluid w-50 h-75 cardradius mx-2 " alt="character"/>
                     <div  className="justify-content-center align-item-center d-flex flex-column" >
                     <h6 className="spaces">{charact.charname}</h6>
                     <p className=" text-truncate trunc" >{charact.frienddetails}</p>
                                                           
                 </div>
                                                         
 </div>           
                 
           </div>
          
         )
       })}
        
     </div>
                )
           
                )}    
           </Offcanvas.Body>
           </Offcanvas>     
               

  
            </>
          );
    
   
  }
  
   
  
  export default Charside;