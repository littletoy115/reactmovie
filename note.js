// // import React from "react";


// // export default class FetchRandomUser extends React.Component {
// //   state = {
// //     loading: true,
// //     person: null,

// //   };


// //   async componentDidMount() {
// //     const url = "http://localhost:8008/movie";
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     console.log(data);
// //     this.setState({ person: data, loading: false });
// //   }

// //   render() {
// //     if (this.state.loading) {
// //       return <div>loading...</div>;
// //     }

// //     if (!this.state.person) {
// //       return <div>didn't get a person</div>;

// //     }
// //     const data = this.state.person.map((UserData) =>
// //       <div key={UserData.id_movie}>
// //         <div className="movie-align col-md-3">
         
// //           <img src= {"http://localhost:8008/assets/" + UserData.movie_picture} width="185" height="275" />
// //           <div className="movie-info">
// //             <h3>{UserData.movie_name}</h3>
// //             <h3>{UserData.movie_year}</h3>
// //             <h3>{UserData.movie_rating}</h3>

// //           </div>
// //         </div>

// //       </div>
// //     );
// //     return (
// //       <div>
// //         {data}
// //         {console.log(data)}
// //       </div>
// //     );
// //   }
// // }
// // // import React, { Component } from 'react';
// // // import './App.css';


// // // class Content extends Component {

// // //   constructor(props){
// // //     super(props);
// // //     this.state = {
// // //       movieName: "",
// // //       movieYear:"",
// // //       movieRate:"",
// // //     }
// // //   }

// // //   render() {

// // //     return (
// // //       <div>

// // //       </div>

// // //     );
// // //   }
// // // }
// // // export default Content;

// // import React, { Component } from 'react';
// // import Form, { Component } from '/components/.form.js';
// // import { response } from 'express';
// //         // <div>{this.state.person[0].movie_name}</div> 
// //         // <div>{this.state.person[0].movie_year}</div>
// //         // <div>{this.state.person[0].movie_rating}</div> 
        
// //       //  <img src={this.state.person.picture.large} /> 
// // class Form extends Component {
// //     constructor()
// //     {
// //         super();
// //         this.state={
// //             data:[],
// //         }
// //     }
// //     componentDidMount()
// //     {
// //         fetch('http://localhost:3000/getData/')
// //         .then((Response)=>Response.json())
// //         .then((findresponse)=>
// //         {
// //             this.setState({
// //                 data:findresponse.movies,
// //             })
// //         })
// //     }
// //     render()
// //     {
// //         return(
// //             <div>
// //                 {
// //                     this.state.data.map((dynamicData,key) =>
// //                     <div>
// //                         <span>{dynamicData.title}:</span>)
// //                     </div>
// //                     )
// //                 }
// //             </div>
// //         )
// //     }
// // }
// //     export default form;


// //     import React, { Component } from 'react';


// // class Form extends React.Component {

    
// //     constructor(props) {

// //         super(props);

// //         this.state = {
// //             items: [],
// //             isLoaded: false
// //         }

// //     }

// //     /**
// //      * componentDidMount
// //      *
// //      * Fetch json array of objects from given url and update state.
// //      */
// //     componentDidMount() {

// //         fetch('http://localhost:3000/getData')
// //             .then(res => res.json())
// //             .then(json => {
// //                 this.setState({
// //                     items: json,
// //                     isLoaded: true, 
// //                 })
// //             }).catch((err) => {
// //                 console.log(err);
// //             });

// //     }

// //     /**
// //      * render
// //      *
// //      * Render UI
// //      */
// //     render() {

// //         const { isLoaded, items } = this.state;

// //         if (!isLoaded)
// //             return <div>Loading...</div>;

// //         return (
// //             <div>
// //                 <ul>
// //                     {items.map(item => (
// //                         <li key={item.id}>
// //                             Name: {item.name} | Email: {item.email}
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         );

// //     }

// // }
// // export default Form;


// //import
// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// // Include http module.
// // var http = require('http');

// var server = app.listen(7900, function (){
//   var host = server.address().address
//   var port = server.address().port
//   console.log("App run at http://%s:%s", host, port)
// });

// //create connections
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "movierecord"
// });


// app.get('/getData', function (req, res) {
//   //connect database
//   con.connect(function(err){
//     if (err) throw err;
//     console.log("connected!!!");
//     sql ="select * from users";
//     con.query(sql, function (err,result){
//       if (err) throw err;  //check error
//       console.log("getData Success", result); //log ข้อมูลมาดู
//       res.json(result);
//     });
//   });
// })

// app.post('/postData',  (req, res) => {
//   var driver={
//     "email":req.body.email,
//     "password":req.body.password
//   }
//   con.query('insert into driver SET ?', driver, function (err,result){
//     if (err) throw err;  //check error
//     res.json(result);
//   });
// })

// // app.put('/putData/:id',(req, res) => {
// //   let sql = "UPDATE driver SET email='"+req.body.email+"', password='"+req.body.password+"' WHERE id="+req.params.id;
// //   let query = con.query(sql, (err, results) => {
// //     if(err) throw err;
// //     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
// //   });
// // });

// // app.delete('/deldata/:id', (req, res) => {
// //   let sql = "DELETE FROM driver WHERE id="+req.params.id+"";
// //   let query = con.query(sql, (err, results) => {
// //     if(err) throw err;
// //       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
// //   });
// // })

















// // // app.post('/postData2',function(req,res){
// // //           var driver={
// // //     "email":req.body.email,
// // //     "password":req.body.password
// // //     }
// // //   con.query('INSERT INTO driver SET ?',driver, function (error, results, fields) {
// // //   if (error) {
// // //     console.log("error ocurred",error);
// // //     res.send({
// // //       "code":400,
// // //       "failed":"error ocurred"
// // //     })
// // //   }else{
// // //     console.log('The solution is: ', results);
// // //     res.send({
// // //       "code":200,
// // //       "success":"user registered sucessfully"
// // //         });
// // //   }
// // //         });
// // //     });


// // //
// // // app.delete('/delData/:?', function (req, res) {
// // //   con.query('delete from driver where id=?', function (err,result){
// // //     if (err) throw err;
// // //   res.send('DELETE request to homepage')
// // //   });
// // // });



// // // app.delete('/delete/:id', function(req, res) {
// // // var id = req.param("id");
// // //     driver.remove({
// // //         _id: id
// // //     }, function(err){
// // //         if (err) {
// // //             console.log(err)
// // //         }
// // //         else {
// // //            return res.send("Removed");
// // //         }
// // //     });
// // // });
// // //
// // // app.delete('/delete', function (req, res) {
// // // 	  if(req.body.id)
// // // 		app.data.splice(req.body.id-1,1);
// // // 	  console.log("delete data!");
// // // 	  res.send(app.data);
// // // 	});

// // // app.delete('/deleteData/:index', function (req, res) {
// // //   // data = JSON.parse(data);
// // //   // delete data["id" + req.params.index];
// // //   res.send('DELETE request to homepage')
// // // })

// // // app.delete('/delData/:index', (request, response) => {
// // //   data = JSON.parse(data);
// // //   delete data["driver" + req.params.index];
// // //
// // // });


// // //req คือรีเควส คือค่าที่ส่งมาจากหน้าบ้าน
// // //res คือเรสปอน คือค่าที่มันกลับมา
// // //next คือทำฟังก์ชั่นต่อ
// // // Create http server.
// // // var httpServer = http.createServer(function (req, resp) {
// // //
// // //     resp.writeHead(200, {'Access-Control-Allow-Origin':'*','Content-Type': 'text/plain'});
// // //     resp.write("Welcome to toythailand.com.");
// // //     resp.write("Welcome baby");
// // //     resp.end();
// // // });
// // //
// // //
// // //
// // // // Start http server listen on port 8888.
// // // httpServer.listen(8888);


// // console.log("Use browser to get url 'http://localhost:8888/http_server.js'");


// // //code **UPDATE**
// //   // sql ="update driver set email='cotyoe@hotmail.com', phone='0655555' where id=11";
// // //code **Delete sql**
// //   // sql ="delete from driver where id=14";
// // //Code **Select SQL**
// //   // sql ="select email,password from driver"; //แบบมีเงื่อนไข sql="select * from driver where id>8"
// // // console.log("result");
// // //Code **Insert SQL**
// //   // sql ="insert into driver(email,password) values ('vorasit@hotmail.com',1234)";



// //   // app.delete('/deleteData/:index', function (req, res) {
// //   //     data = JSON.parse(data);
// //   //     delete data["driver" + req.params.index];
// //   //     res.end(JSON.stringify(data));
// //   // });
// //   // app.delete = function(req, res, next) {
// //   //     app.delete({_id: req.params.id}, function(err, hero) {
// //   //         if(err) {
// //   //             res.json({
// //   //                 error : err
// //   //             })
// //   //         }
// //   //         res.json({
// //   //             message : "Hero deleted successfully"
// //   //         })
// //   //     })
// //   // };
// //   // app.delete = (req, res) => {
// //   //     app.findByIdAndRemove(req.params.noteId)
// //   //     .then(note => {
// //   //         if(!note) {
// //   //             return res.status(404).send({
// //   //                 message: "Note not found with id " + req.params.noteId
// //   //             });
// //   //         }
// //   //         res.send({message: "Note deleted successfully!"});


// //   // app.delete('/delete/id', function (id, result) {
// //   //      sql.query("DELETE FROM driver WHERE id = ?", [id], function (err, res) {
// //   //
// //   //                 if(err) {
// //   //                     console.log("error: ", err);
// //   //                     result(null, err);
// //   //                 }
// //   //                 else{
// //   //
// //   //                  result(null, res);
// //   //                 }
// //   //             });
// //   // });
