import { Router } from "express"

[
    {
        name: "Pokua Danso"
        position: "Cook"
    },
    {
        name: "Alex Boadi"
        position: "Bus Driver"
    },
    {
        name: "Yue Jin"
        position: "Manager"
    },
    {
        name: "Peter Asare"
        position: "Gardener"
    },
    {
        name: "Mira Osei"
        position: "secretary"
    },
]

router.get('/', (req, res) => {
    res.render('home',{
        title: 'Home',
        employeelist
    })
});

router.get('/employeedetails/:id', (res, req) => {
    const id = req.params.id;
    const employee = employee[id];
    res.render('employeedetails.ejs',{
        title: employee[id].name,
        employee
    })
}),
module.exports = router;