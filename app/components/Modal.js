export default function Modal(){
    return(
        <div class="modal-body">
  <h2 class="fs-5">Popover in a modal</h2>
  <p>This <a href="#" role="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr/>
  <h2 class="fs-5">Tooltips in a modal</h2>
  <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
    )
}