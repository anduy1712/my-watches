var danhsach = new DANHSACH();

function ChangeImg(){
    var id = document.getElementById('id').value;
    var img = document.getElementById('imgput').value;
    var ten = document.getElementById('ten').value;
    var mieuta = document.getElementById('mieuta').value;
    
    var card = new CARD(id,img,ten,mieuta);
    if(danhsach.ds.length  <3)
    {
        
        danhsach.ThemCard(card);
        SetStorage();
        GetStorage()
    }
    else{
        alert("Danh Sach Da Du 3 ")
        return;
    }
    
}

function listChecked(){
    var id = document.getElementsByClassName('selectCard');
    var listChecked =[];
    for(var i=0;i<id.length;i++)
    {
        if(id[i].checked)
        {
            listChecked.push(id[i].value);
            
        }
       
    }
    return listChecked;
    danhsach.SuaCard(listChecked);
    console.log(danhsach);
}
function CapNhapCard(danhsach){
    var testdiv = document.getElementById('roww');
    testdiv.innerHTML ="";
    for(var i = 0; i < danhsach.ds.length;i++)
    {
        var div = document.createElement('div');
        div.innerHTML = "";
        var inputCheckBox = document.createElement('input');
         inputCheckBox.setAttribute('type','checkbox')
         inputCheckBox.setAttribute('class','checkBox')
         inputCheckBox.setAttribute('value',danhsach.ds[i].id)
         inputCheckBox.setAttribute('onclick',"TimCard('"+ danhsach.ds[i].id+"')")
        var img = document.createElement('img');
        var h2 = document.createElement('h2');
        var p = document.createElement('p');
        div.className = 'col-md-4'
        div.setAttribute('id',danhsach.ds[i].id);
       
        img.setAttribute('src',danhsach.ds[i].hinhanh);
        img.className = 'imgH';

        h2.innerHTML= danhsach.ds[i].ten;
        h2.className = 'headingH';
        p.innerHTML= danhsach.ds[i].mieuta;

        // document.getElementById('imgheader').src = danhsach.ds[i].hinhanh;
        // document.getElementById('heading').innerHTML = danhsach.ds[i].ten;
        // document.getElementById('content').innerHTML = danhsach.ds[i].mieuta;
        div.appendChild(inputCheckBox);
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
       
        testdiv.appendChild(div);
    }
}
function GetStorage()
{
    var abc = localStorage.getItem('DANHSACH');
    console.log(abc);
    if(abc == null)
    {
        document.getElementById('imgheader').src = "https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg";
        document.getElementById('heading').innerHTML = "Day la tieu de"
        document.getElementById('content').innerHTML = "Noi dung"
    }
    else{
        var abcObj = JSON.parse(abc);
        danhsach.ds = abcObj;
        
        CapNhapCard(danhsach);
    }
    
   

}
function SetStorage(){
    
    localStorage.setItem('DANHSACH',JSON.stringify(danhsach.ds))
}


function CARD(id,hinhanh, ten, mieuta){
    this.id = id;
    this.hinhanh = hinhanh;
    this.ten = ten;
    this.mieuta = mieuta;
}
function DANHSACH(){
    this.ds = [];
    this.ThemCard = function(value){
        this.ds.push(value);
    }
    this.SuaCard = function(value){
        for(var i = 0 ; i < this.ds.length;i++)
        {
            if (value.id == this.ds[i].id)
            {
                this.ds[i].hinhanh = value.hinhanh;
                this.ds[i].ten = value.ten;
                this.ds[i].mieuta = value.mieuta;
              
            }
        }
    }
    this.ChinhSuaTheoId = function(value){
        for (var i = 0 ; i < this.ds.length;i++)
        {
            if (this.ds[i].id == value)
            {
                return this.ds[i];
            }
        }
    }
}
function TimCard(value){
  var danhSachTimKiem = danhsach.ChinhSuaTheoId(value);
    
    document.getElementById('id').value = danhSachTimKiem.id;
    document.getElementById('imgput').value = danhSachTimKiem.hinhanh;
    document.getElementById('ten').value = danhSachTimKiem.ten;
    document.getElementById('mieuta').value = danhSachTimKiem.mieuta;
  
}
function LuuDanhSach(){
    var id = document.getElementById('id').value;
    var img = document.getElementById('imgput').value;
    var ten = document.getElementById('ten').value;
    var mieuta = document.getElementById('mieuta').value;
    
    var card = new CARD(id,img,ten,mieuta);
    danhsach.SuaCard(card);
    //CapNhapCard(danhsach);
    SetStorage();
    GetStorage()
}