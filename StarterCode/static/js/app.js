// from data.js
var tableData = data;

// YOUR CODE HERE!
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Bootstrap Table</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="styles.css">
</head>
<head>
<script>
    function drawTable(tbody {
        var tr, td;
        tbody = matchData.querySelector('tbody');
        for (var i=0; i< data.length; i++) {
            tr = tbody.insertRow(tbody.rows.length);
        }
        drawTable("matchData")
    })
</script>

<body>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>datetime</th> 
              <th>city</th>
              <th>state</th>
              <th>country</th>
              <th>shape</th>
              <th>comment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>

</html>
