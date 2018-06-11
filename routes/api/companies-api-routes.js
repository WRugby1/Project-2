var db = require("../../models");

var router = require("express").Router();

// GET route for getting all of the companies
router.get("/all", function(req, res) {
  console.log("This is working");
  db.Company.findAll({}).then(function(dbCompany) {
    res.json(dbCompany);
  });
});

router.post("/new", function(req, res) {
  console.log("New Company:");
  console.log(req.body);
  db.Company.create({
    co_name: req.body.co_name,
    co_url: req.body.co_url,
    co_email: req.body.co_email,
    co_phone: req.body.co_number,
    priority: req.body.priority
  });
});
  // DELETE route for deleting company
router.delete("/:id", function(req, res) {
  db.Company.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbCompany) {
    res.json(dbCompany);
  });
});

 // PUT route for updating companies
router.put("/", function(req, res) {
  db.Company.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbCompany) {
    res.json(dbCompany);
  });
});

module.exports = router;



// module.exports = function(app) {

//      // GET route for getting all of the companies
//   app.get("/api/all", function(req, res) {
//     console.log("This is working");
//     db.Company.findAll({}).then(function(dbCompany) {
//       res.json(dbCompany);
//     });
//   });

//   app.post("/api/new", function(req, res) {
//     console.log("New Company:");
//     console.log(req.body);
//     db.Company.create({
//       co_name: req.body.co_name,
//       co_url: req.body.co_url,
//       co_email: req.body.co_email,
//       co_phone: req.body.co_number,
//       priority: req.body.priority
//     });
//   });
//     // DELETE route for deleting company
//  app.delete("api/companies/:id", function(req, res) {
//     db.Company.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbCompany) {
//       res.json(dbCompany);
//     });
//   });

//    // PUT route for updating companies
// app.put("api/companies", function(req, res) {
//     db.Company.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbCompany) {
//       res.json(dbCompany);
//     });
//   });
// };