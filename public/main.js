getCSS.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('get','/style.css')
    xhr.send()
    xhr.onreadystatechange = function(){
    //下载完成，但不知道是成功 2XX，还是失败 4XX
        if(xhr.readyState===4){
            if (xhr.status >=200 && xhr.status <300){
                const style = document.createElement('style')
                style.innerHTML = xhr.response
               document.head.appendChild(style)
            }else{
                console.log('失败')
           }
        }
    }
}

getJS.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('get','/2.js')
    xhr.send()
    xhr.onreadystatechange = function(){
        //下载完成，但不知道是成功 2XX，还是失败 4XX
            if(xhr.readyState===4){
                if (xhr.status >=200 && xhr.status <300){
                    const script = document.createElement('script')
                    script.innerHTML = xhr.response
                    document.body.appendChild(script) 
                }else{
                     console.log('失败')
                }
            }
        }
}
getHTML.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('get','/3.html')
    xhr.send()
    xhr.onreadystatechange = function(){
        //下载完成，但不知道是成功 2XX，还是失败 4XX
            if(xhr.readyState==4){
                if (xhr.status >=200 && xhr.status <300){
                    const div = document.createElement('div')
                    div.innerHTML = xhr.response
                    document.body.appendChild(div) 
                }else{
                     console.log('失败')
                }
            }
        }
}
getXML.onclick = () =>{
    const xhr = new XMLHttpRequest()
    xhr.open('get','/4.xml')
    xhr.send()
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if(xhr.status>=200 && xhr.status<300){
                const dom = xhr.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }else{
                console.log('失败')
            }
        }
    }
}

getJSON.onclick = ()=>{
    const xhr = new XMLHttpRequest()
    xhr.open("get","/5.json")
    xhr.send()
    xhr.onreadystatechange = () =>{
        if(xhr.readyState ===4){
            if(xhr.status>=200 && xhr.status<300){
                const object = JSON.parse(xhr.response)
                userName.textContent = object.name
            }
        }
    }
}

let n = 1
getPage.onclick = ()=>{
    const xhr = new XMLHttpRequest()
    xhr.open("get",`/page${n+1}`)
    xhr.send()
    xhr.onreadystatechange = () =>{
        if(xhr.readyState ===4){
            if(xhr.status>=200 && xhr.status<300){
                const array = JSON.parse(xhr.response)
            array.forEach(item =>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            }
            n+=1
        }
    }
}