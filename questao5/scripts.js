function PegaId(idmodal)
{
    var ids = document.getElementById(idmodal);
    let atual_id = ids.id;
    AbreModal("modal-init");
    var iframe_src = document.getElementById("iframe").src = "https://www.alura.com.br/" + atual_id;
    console.log(iframe_src)

    
}

function AbreModal(modalId)
{
   const modal = document.getElementById(modalId);
   modal.classList.add("active")
}

function MaximizaModal()
{
    if(modal.className == "modal maximize")
    {
        MinimizaModal();
    }
    else
    {
        const modal = document.getElementById("modal");
        modal.classList.add("maximize");
    }
    
    
}

function MinimizaModal()
{
    const modal = document.getElementById("modal");
    modal.classList.remove("maximize");
}

function FechaModal()
{
    const modal = document.getElementById("modal-init");
    modal.classList.remove("active");
}

//AbreModal("modal-init");