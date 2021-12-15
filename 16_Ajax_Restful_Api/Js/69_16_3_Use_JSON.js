document.getElementById('here').innerHTML = `
<div class="container">
<div class="row">
    
    <div id="employees" class="col mt-3">
        <table class="table table-bordered table-striped">
            <thead class="text-center" >
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Retired
                    </th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>

        </table>
        
    </div>
    <div class="col">
        <button id="getEmployee" class="btn-primary m-3 btn">Get Employe</button>
    </div>
</div>
</div>
`
//* Json Usage

$(document).ready(function () {
    document.getElementById('getEmployee').addEventListener('click', loadEmployee)
    function loadEmployee() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "employness.json", true)

        xhr.onload = function () {
            if (this.status === 200) {
                // console.log(this.responseText)
                // console.log(JSON.parse(this.responseText))

                let employness = JSON.parse(this.responseText)
                // let arrays = Array.from(employness)
                let data = employness.employnes 
                let ShareInoLength = employness.employnes.length    
                ShowData(data, ShareInoLength)

            }
        }


        xhr.send();
    }
})


function ShowData(data, lengt) {
    let item;
    $("#employees tbody").html("")
    for (let i=0; i < lengt; i++) {

        item = data[i]
        // console.log(item)
        
        let content = `
        <tr>
            <th>
                ${item.firstname}
            </th>
            <th>
                ${item.lastname}
            </th>
            <th>
                ${item.age}
            </th>
            <th>
                ${item.retired}
            </th>
        </tr>
        `
        $("#employees tbody").append(content);

    }
}