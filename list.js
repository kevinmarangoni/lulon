import { getData, getSectors } from "./data/object.mjs";
import { getFinalObject, getSectorsLabelValue } from "./data/finalObject.mjs"
import lodash from "lodash"
import fs from 'fs'


const allData = getData()
const arrayData = getSectors()

const preFormatedSectors = []
const preFormatedSubSectors = []

async function saveObjAsText(userInput, save, ext) {
    let string = userInput.toString()
    fs.writeFile('./texts/'+save+'.'+ext, string, err=>{
        if (err){
            console.log("error: ", err)
            return
        }
    })
}


arrayData.map((item, index) => {

    function checkEven(i) {
        let num = i % 2
        if (num == 1) {
            return false
        }
        else if (num == 0) {
            return true
        }
    }
    if (checkEven(index)) {
        preFormatedSectors.push(item)
    }
    else if (!checkEven(index)) {
        preFormatedSubSectors.push(item)
    }
})

const sectorsList = lodash.uniq(preFormatedSectors)
const subSectorsList = lodash.uniq(preFormatedSubSectors)


function getSectorsList() {
    let a = []
    const b = ["[\n"]
    sectorsList.map((item, index) => {

        a.push("{sector:", "'" + item + "'", ",", "subSector:[ ")
        for (let i = 0; i < allData.length; i++) {
            if (item == allData[i].sector) {
                a.push("'" + allData[i].subSector + "'", ",")
            }
        }
        a.push("]},\n")
        b.push(a.join(""))
        a = []
    })
    b.push("\n]")
    return b.join("")
}

function formatIntoDropdown(data) {
    const b = ["[\n"]
    let a = []
    data.map((item, index) => {
        a.push("{label:", "'" + item.sector + "'", ",", "value: ", "'" + item.sector + "'", "},\n")
        b.push(a.join(""))
        a = []
    })
    b.push("\n]")
    return b.join("")
}

function labelValue(data) {
    let a = []
    const b = ["{\n"]
    data.map((item, index) => {
        a.push("'" + item.sector + "'", ": [\n")
        for (let i = 0; i < item.subSector.length; i++) {
            a.push("{label: ", "'" + item.subSector[i] + "'", ",", "value: ", "'" + item.subSector[i] + "'", "},\n")
        }
        
        a.push("],\n")
        b.push(a.join(""))
        a = []
    })
    b.push("\n}")
    return b.join("")
}
await saveObjAsText(getSectorsList(), "sectors","txt")
await saveObjAsText(formatIntoDropdown(getFinalObject()),"dropdown","txt")
await saveObjAsText(labelValue(getFinalObject()),"labels","txt")


