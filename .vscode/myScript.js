<!DOCTYPE html>
<html>
    <body>
        <button onclick= "myFunction()">Try</button>
        <script>
            function myFunction() {
               let text = document.getElementById("demo").innerHTML;
               document.getElementById("demo").innerHTML =
               text.toUpperCase();}
        </script>
    </body>
</html>