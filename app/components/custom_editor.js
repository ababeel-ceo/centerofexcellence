'use client'
import { useState } from "react";
import "./editor.css";
import { useRouter } from 'next/navigation'

let active = false;
export default function CustomEditor(){ 

	const router = useRouter();
	const [data, setData] = useState("");
    function formatDoc(cmd, value = null) {
        if (value) {
            document.execCommand(cmd, false, value);
        } else {
            document.execCommand(cmd);
        }
    }
    function addLink() {
        const url = prompt('Insert url');
        formatDoc('createLink', url);
    }
	function hanldeHoverMenu(){
		 
			const a = content.querySelectorAll('a');
			a.forEach(item => {
				item.addEventListener('mouseenter', function() {
					content.setAttribute('contenteditable', false);
					item.target = '_blank';
				})
				item.addEventListener('mouseleave', function() {
					content.setAttribute('contenteditable', true);
				})
			})
		
	}
	function handleShowCode(){
			const showCode = document.getElementById('show-code');
			showCode.dataset.active = !active;
			active = !active;
			if (active) {
				content.textContent = content.innerHTML;
				content.setAttribute('contenteditable', false);
			} else {
				content.innerHTML = content.textContent;
				content.setAttribute('contenteditable', true);
			}
		
	}
    function fileHandle(value) {
		const filename = document.getElementById('filename');
		const content = document.getElementById('content');
        if (value === 'new') {
            content.innerHTML = '';
            filename.value = 'untitled';
        } else if (value === 'txt') {
            const blob = new Blob([content.innerText])
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a');
            link.href = url;
            link.download = `${filename.value}.txt`;
            link.click();
        } else if (value === 'pdf') {
            html2pdf(content).save(filename.value);
        }
    }
	function handleSave(){
		const content = document.getElementById('content');
		setData(content.innerHTML);  
	}
	function handleGenerate(){
		const content = document.getElementById('content');
		content.innerHTML = data;
	}
    return (
     
		<>	 
		<div class="toolbar">
			<div class="head">
				<input type="text" placeholder="Filename" value="untitled" id="filename"  disabled/>
				<select onChange={(e)=>{fileHandle(e.target.value); e.target.selectedIndex=0}}>
					<option value="" selected="" hidden="" disabled="">File</option>
					<option value="new">New file</option>
					<option value="txt">Save as txt</option>
					<option value="pdf">Save as pdf</option>
				</select>
				<select
                onChange={(e)=>{formatDoc("formatBlock",e.target.value); e.target.selectedIndex=0;}}>
					<option value="" selected="" hidden="" disabled="">Format</option>
					<option value="h1">Heading 1</option>
					<option value="h2">Heading 2</option>
					<option value="h3">Heading 3</option>
					<option value="h4">Heading 4</option>
					<option value="h5">Heading 5</option>
					<option value="h6">Heading 6</option>
					<option value="p">Paragraph</option>
				</select>
				<select onChange={(e)=>{formatDoc('fontSize', e.target.value); e.target.selectedIndex=0;}}>
					<option value="" selected="" hidden="" disabled="">Font size</option>
					<option value="1">Extra small</option>
					<option value="2">Small</option>
					<option value="3">Regular</option>
					<option value="4">Medium</option>
					<option value="5">Large</option>
					<option value="6">Extra Large</option>
					<option value="7">Big</option>
				</select>
				<div class="color">
					<span>Color</span>
					<input type="color" onInput={(e)=>{formatDoc('foreColor', e.target.value); e.target.value='#000000';}}/>
				</div>
				<div class="color">
					<span>Background</span>
					<input type="color" onInput={(e)=>{formatDoc('hiliteColor', e.target.value);e.target.value = '#000000';}} />
				</div>
			</div>
			<div class="btn-toolbar">
				<button onClick={()=>formatDoc('undo')}><i class='bx bx-undo' ></i></button>
				<button onClick={()=>formatDoc('redo')}><i class='bx bx-redo' ></i></button>
				<button onClick={()=>formatDoc('bold')}><i class='bx bx-bold'></i></button>
				<button onClick={()=>formatDoc('underline')}><i class='bx bx-underline' ></i></button>
				<button onClick={()=>formatDoc('italic')}><i class='bx bx-italic' ></i></button>
				<button onClick={()=>formatDoc('strikeThrough')}><i class='bx bx-strikethrough' ></i></button>
				<button onClick={()=>formatDoc('justifyLeft')}><i class='bx bx-align-left' ></i></button>
				<button onClick={()=>formatDoc('justifyCenter')}><i class='bx bx-align-middle' ></i></button>
				<button onClick={()=>formatDoc('justifyRight')}><i class='bx bx-align-right' ></i></button>
				<button onClick={()=>formatDoc('justifyFull')}><i class='bx bx-align-justify' ></i></button>
				<button onClick={()=>formatDoc('insertOrderedList')}><i class='bx bx-list-ol' ></i></button>
				<button onClick={()=>formatDoc('insertUnorderedList')}><i class='bx bx-list-ul' ></i></button>
				<button onClick={()=>addLink()}><i class='bx bx-link' ></i></button>
				<button onClick={()=>formatDoc('unlink')} ><i class='bx bx-unlink' ></i></button>
				<button id="show-code" data-active="false" onClick={()=>handleShowCode()}>&lt;/&gt;</button>
			</div>
		</div>
		<div id="content" contenteditable="true" spellcheck="false" onMouseOver={()=>hanldeHoverMenu()} style={{border: "1px solid black"}}>
			
		</div>
		<div className="d-float pt-4">
			<button className="btn btn-secondary float-end">Save</button>
			<button className="btn btn-secondary float-end mx-1">Reset</button>
			<button className="btn btn-secondary float-end" onClick={()=>router.push("/")}>Back to home</button>
		</div>
		</>
    )
}