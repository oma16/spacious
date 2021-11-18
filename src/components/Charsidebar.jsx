import React,{useState} from 'react'
import {Offcanvas, Card,Container,Row ,Col,Form} from 'react-bootstrap'


import './strapi assets/characters/character-1.png'
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
  const Characters = [
    {"id": 1,"image":"./strapi assets/characters/character-1.png", "planetname":"Alpha","charname":" Brooklyn Simmons","description":"Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 2,"image":"./strapi assets/characters/character-2.png","planetname":"Alpha","description":"Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cameron Williamson","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 3,"image":"./strapi assets/characters/character-3.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Leslie Alexander","numOffriends":"23","friends":[
      {
          "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 4,"image":"./strapi assets/characters/character-4.png", "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Kristin Watson","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 5,"image":"./strapi assets/characters/character-5.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Jenny Wilson","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 6,"image":"./strapi assets/characters/character-6.png", "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Marvin McKinney","numOffriends":"23","friends":[
      {
          "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 7,"image":"./strapi assets/characters/character-7.png","planetname":"Alpha", "description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":"Jerome Bell","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 8,"image":"./strapi assets/characters/character-8.png", "planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Guy Hawkins","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {"id": 9,"image":"./strapi assets/characters/character-9.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":"Robert Fox","numOffriends":"23","friends":[
      {
          "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    
    {"id": 10, "image":"./strapi assets/characters/character-10.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Eleanor Pena","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  },
    {"id": 11,"image":"./strapi assets/characters/character-11.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cody Fisher","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }

  ]
  },
    {
        "id": 12,"image":"./strapi assets/characters/character-12.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Courtney Henry","numOffriends":"23","friends":[
          {
              "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {
              "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  
          },
          {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
      ]
      },
    {
        "id": 13,"image":"./strapi assets/characters/character-13.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Annette Black","numOffriends":"23", "friends":[
          {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          
          {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {
              "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
      ]
      },
    {
        "id": 14,"image":"./strapi assets/characters/character-14.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Brooklyn Williams","numOffriends":"23", "friends":[
          {"id": 1,"image":"./strapi assets/characters/character-1.png","charname":" Brooklyn Simmons","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 2,"image":"./strapi assets/characters/character-2.png","charname":" Cameron Williamson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 3,"image":"./strapi assets/characters/character-3.png","charname":" Leslie Alexander","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 4,"image":"./strapi assets/characters/character-4.png","charname":" Kristin Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 5,"image":"./strapi assets/characters/character-5.png","charname":" Jenny Wilson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          },
          {"id": 6,"image":"./strapi assets/characters/character-6.png", "charname":" Marvin McKinney","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
    
      ]
      },
    {"id": 15,"image":"./strapi assets/characters/character-15.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Kristin Williamson", "numOffriends":"23","friends":[
      {
          "id": 1,"image":"./strapi assets/characters/character-13.png","charname":" Annette Black","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 2,"image":"./strapi assets/characters/character-14.png","charname":" Brooklyn Williams","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-15.png","charname":" Kristin Williamson", "frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."

      },
      {"id": 4,"image":"./strapi assets/characters/character-16.png","charname":" Cameron Watson","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
    },
    {"id": 16,"image":"./strapi assets/characters/character-16.png","planetname":"Alpha","description":" is really a nice person. She’s been living on planet Alpha for the last 10 years.","charname":" Cameron Watson","numOffriends":"23", "friends":[
      {"id": 1,"image":"./strapi assets/characters/character-7.png","charname":"Jerome Bell","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 2,"image":"./strapi assets/characters/character-8.png","charname":" Guy Hawkins","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 3,"image":"./strapi assets/characters/character-9.png","charname":"Robert Fox","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      
      {"id": 4, "image":"./strapi assets/characters/character-10.png","charname":" Eleanor Pena","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {"id": 5,"image":"./strapi assets/characters/character-11.png","charname":" Cody Fisher","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      },
      {
          "id": 6,"image":"./strapi assets/characters/character-12.png","charname":" Courtney Henry","frienddetails":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
  ]
  }
   
  
  ]
  
    const [show, setShow] = useState(false);
    const [characters,setCharacters] = useState(Characters);
    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);
     
    
    
     
return (
            <>
             <div className="mb-5">
               
          
             
        <Container>
        <div className="d-flex justify-content-end">
                 <Form.Select aria-label="Default select example" className="selectt space">
                    <option>Planet: All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                 </Form.Select>
                 </div>
                <Row >
            {characters.map((character) => {
            return  (
                
                <Col sm={4} md ={3} xl={3} xs={12}  className ="" >
                <div className="planet-view"  onClick={handleShow}>
                           
  <Card className="mt-4 cardradius" >
                                    
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
        {characters.filter((character,index) => character.id == [index]+1 ).map(filteredchar => (
             
             <div >
           <Offcanvas show={show} onHide={handleClose} {...props}>
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="navibar"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  data-bs-scroll="true" >
              <Offcanvas.Title className="navibar">{filteredchar.charname}</Offcanvas.Title>
                <p> {filteredchar.charname} {filteredchar.description}</p>
               
                     <div className="d-flex flex-row justify-content-between">
                        
                        <p>Planet <br/> <h5 className="spaces">{filteredchar.planetname}</h5></p>
                         <p> Friends <br /> {filteredchar.numOffriends}</p>
                         <div></div>
                        </div>
                        < h5 className="text-muted mt-5">FRIENDS</h5>
                   
              {filteredchar.friends.map(charact =>{
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