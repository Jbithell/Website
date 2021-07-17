var fs = require('fs');
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

function csvToArray(csv) {
  var arr = csv.split('\n');     

    var jsonObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(',');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
        if (headers[j]) {
           obj[headers[j].trim()] = data[j].trim();
        }
      }
      jsonObj.push(obj);
    }
    return jsonObj;
}

fs.readFile('Credits.csv', {encoding: 'utf-8'}, function (err, file) {
  var data = csvToArray(file)
  console.log(data);
  data.forEach(element => {
    if (element.Name) {
      if (element["Start Date Accuracy"] == "D") {
        var date = new Date(element['Start Date']);
        element["Date"] = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear()
      } else if (element["Start Date Accuracy"] == "M") {
        var date = new Date(element['Start Date']);
        element["Date"] = monthNames[date.getMonth()] + "-" + date.getFullYear()
      } else {
        var date = new Date(element['Start Date']);
        element["Date"] = date.getFullYear()
      }
      var slug = encodeURI((element["Date"] + "-" + element.Name).split(" ").join("-").replace(/[^a-z0-9-]/gi,'').toLowerCase())
      var output = `---\nexample: false\ntype: "liveEvent"\nslug: "${slug}"\n`;
      output += `Date: "${element["Date"]}"\n`
      if (element["End Date"] != "") {
        var edate = new Date(element['End Date']);
        output += `Date: "${edate.getDate() + "-" + monthNames[edate.getMonth()] + "-" + edate.getFullYear()}"\n`
      } else {
        output += `EndDate: ""\n`
      }
      var tags = []
      var roles = []
      var array1 = ["Sound","Lighting","Automation",'Stage Management',"Direction","Production","Audience",'Front of House',"Video","Set",'Acting/Presenting',"Miscellaneous"]
      array1.forEach(role => {
        if (element[role]) {
          tags.push(role)
          roles.push(element[role])
        }
      });
      var array2 = ["Name","Author","Director","Venue"]
      array2.forEach(param => {
        output += `${param}: "${element[param]}"\n`
      });
      output += `Roles: ["${roles.join('","').split(" & ").join('","')}"]\n`
      output += `Tags: ["${tags.join('","')}"]\n`
      output += `EventType: "${element["Type"]}"\n`
      output += `PerformancesAttended: ${element['Performances Attended'].replace(/[^a-z0-9]/gi,'')}\n`
      output += `Fee: "${(element["Fee"])}"\n`
      output += `Professional: ${element["Professional?"] == "TRUE" ? "true" : "false"}\n`
      output += `Paid: ${element["Is Paid"] == "TRUE" ? "true" : "false"}\n`
      var images = []
      if (element["Images"] != "") {
        images = element["Images"].split(",")
        var credit = element["Image Credit"] != null ? "Image by " + element["Image Credit"] : "Image of Event"
      }
      output += `ImageThumb: "${((images.length < 1 ? "" : images[0] ))}"\n`
      output += `ImageCredit: "${(element["Image Credit"])}"\n`
      output += "Client: \n---\n\n"
      output += "# " + element["Name"] + "\n\n"
      if (element["Notes"]) {
        output += element["Notes"] + "\n"
      }
      if (element["Private Notes"]) {
        output += "\nPRIVATE\n" + element["Private Notes"] + "\n"
      }
      images.forEach(image => {
        output += `![${credit}](${image})\n`
      })
      if (element["Image Credit"] != "") {
        output += `*Image Credit: ${element["Image Credit"]}*\n\n`
      }
      fs.writeFile('src/posts/portfolio/events/' + slug + ".md", output, function (err) {
        if (err) return console.log(err);
      });
    }
  });
});