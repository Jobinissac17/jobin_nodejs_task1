var http = require("http");
const os = require("os");
var fs = require("fs");
var nodemailer = require("nodemailer");

var server = http.createServer(function(req,res){
    if(req.url==="/"){
        res.write("welcom to server");
        res.end();
    }
    else if(req.url==="/serverdetails"){
        res.write("the os is windows and ");
        res.write(" architectur is  " + os.arch());
        res.end();

    }
    else if(req.url==="/html/page"){
       fs.readFile("index.html",function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
       });
           
        
    }
    else if(req.url==="/textme"){
        fs.appendFile('testmeter.txt', '', (err) => {
            if (err) throw err;
            console.log('Success!');
        });
    }
    else if(req.url==="/mailer"){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'j',
              pass: 'N'
            }
          });
          
          var mailOptions = {
            from: 'j',
            to: 'n',
            subject: 'Automated mail from Node.js',
            text: 'heloo'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    

    

    else{
        res.write("page dosnt exist");
        res.end();
    }

    
});
server.listen(8888);
console.log("server is in port 8888");
