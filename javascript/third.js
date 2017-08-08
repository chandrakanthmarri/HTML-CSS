var a = document.URL
undefined
var b  = a.split("/")[3]
undefined
b
"watch?v=xbAEUGhAubU&t=100s"
b.split("?")
(2) ["watch", "v=xbAEUGhAubU&t=100s"]
b.split("?")[1]
"v=xbAEUGhAubU&t=100s"

var a = "i am learning javascript"
undefined
a.split(" ")
(4) ["i", "am", "learning", "javascript"]
a.split(" ")[3]
"javascript"
var a = " i am also learning java"
undefined
a.split(" ")[3]
"also"


var a = "i am learning javascript"
undefined
var b = a.split(" ")
undefined
b.length
4
b.length-1
3
b[b.length-1]
"javascript"


var a = "i also am learning javascript"

undefined
var b = a.split(" ")
undefined
b[b.length-1]
"javascript"



///for loop
for(i=0; i<=10;i++){
	console.log(i)
}

var a =["a","b","c","d","e"]
for(i=0; i<=a.length;i++){
	console.log(a[i])
}
for(i=10;i>=0;i--){
	console.log(i)
}

var a = "satya"
var b = a.split("");

for(i=b.length;i>=0;i--){
	console.log(b[i])
}

var i =0;
while(i<10){
	console.log(i);
	i++;
}

var i=0;
do{
	console.log(i);
	i++;
}
while(i<10);

for(i=0;i<=5;i++){
	for(j=i;j<=5;j++){
		console.log("*")
	}
}

000000
111111
2222
333
44
5


for(i=1;i<=5;i++){
	for(j=1;j<=5;j++){
		console.log(j)
	}
}

12345
12345
12345
12345
12345