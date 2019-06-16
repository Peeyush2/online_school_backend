const express = require("express")
const router = express.Router()


router.get('/', function (req, res) {
    res.json({
        "Class 1":[
                {
                    "name": "Hindi",
                    "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
                }, 
                {
                    "name": "English",
                    "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
                }, 
                {
                    "name": "Maths",
                    "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
                }
        
    ],
    "Class 2":[
        {
            "name": "Hindi",
            "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
        }, 
        {
            "name": "English",
            "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
        }, 
        {
            "name": "Maths",
            "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
        }

],
"Class 3":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

],
"Class 4":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

],
"Class 5":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

],"Class 6":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

],"Class 7":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

],"Class 8":[
    {
        "name": "Hindi",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "English",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }, 
    {
        "name": "Maths",
        "syllabus": ["chapter1", "chapter2", "chapter3", "chapter4", "chapter5"]
    }

]
    }
    ).status(200)
})


module.exports = router
