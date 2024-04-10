const express = require("express");
const path = require("path");

const app = express();
const fs = require('fs');
// Use static middleware to serve public files
 app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));


// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error'
    }
  });
});


app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/static/js/apps.js", (req, res) => {
    res.setHeader("Content-Type", "text/javascript");
    res.sendFile(path.resolve(__dirname, "frontend", "static", "js", "apps.js"));
});


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

/*for codes and add users
*/

// Handle POST request
app.post('/asd', (req, res) => {
  try {
    const filename = 'bakcend/imp/users.json';
    const users = JSON.parse(fs.readFileSync(filename));
    const newName = req.body.name;
    const inputCode = req.body.code;
    const jsonData = fs.readFileSync('bakcend/imp/codes.json');
    const codes = JSON.parse(jsonData);
    if (codes[inputCode]) {
     
      if (codes[inputCode]['validate'] === 0) {
        
        res.send("<script>alert('تم استخدام هذا الكود من قبل');;window.location.href = '/'</script>");
      } else if (codes[inputCode]['validate'] === 1) {
      
        users.push({ name: newName });

        
        fs.writeFileSync(filename, JSON.stringify(users));

        
        codes[inputCode]['validate'] = 0;

        
        const jsonData = JSON.stringify(codes);

        fs.writeFileSync('bakcend/imp/codes.json', jsonData);
        
 
        res.send("<script>alert('Success');function _0xf60f(){var _0x1c1e5b=['true','828573ZnlsXy','470388FiEjoS','3309224ktsgAS','15wkawaO','719804iAybct','3okPZnr','1294390xLhKdK','36kytmcU','7TdeTAB','5738718yJDGSa','275WhdZBK','1824946ySyiqu'];_0xf60f=function(){return _0x1c1e5b;};return _0xf60f();}function _0x42f6(_0xc83f74,_0x3b85e8){var _0xf60fba=_0xf60f();return _0x42f6=function(_0x42f613,_0x88b735){_0x42f613=_0x42f613-0x131;var _0x579d4b=_0xf60fba[_0x42f613];return _0x579d4b;},_0x42f6(_0xc83f74,_0x3b85e8);}var _0xcf5327=_0x42f6;(function(_0xf3e8e1,_0xa6b1fb){var _0x356b28=_0x42f6,_0x3c56c5=_0xf3e8e1();while(!![]){try{var _0x51c238=parseInt(_0x356b28(0x132))/0x1+parseInt(_0x356b28(0x13d))/0x2*(-parseInt(_0x356b28(0x137))/0x3)+-parseInt(_0x356b28(0x136))/0x4*(parseInt(_0x356b28(0x135))/0x5)+-parseInt(_0x356b28(0x13b))/0x6*(-parseInt(_0x356b28(0x13a))/0x7)+parseInt(_0x356b28(0x134))/0x8*(parseInt(_0x356b28(0x139))/0x9)+-parseInt(_0x356b28(0x138))/0xa+parseInt(_0x356b28(0x13c))/0xb*(-parseInt(_0x356b28(0x133))/0xc);if(_0x51c238===_0xa6b1fb)break;else _0x3c56c5['push'](_0x3c56c5['shift']());}catch(_0x13c2db){_0x3c56c5['push'](_0x3c56c5['shift']());}}}(_0xf60f,0xd654a),localStorage['setItem']('cookies',_0xcf5327(0x131)));window.location.href = '/'</script>");

        
      }
    } else {
      res.send("<script>alert('رمز الخطأ 1');window.location.href = '/'</script>");
      
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});









app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
