BlockEvents.modification(event => {
    event.modify('compactcrafting:field_projector', block => {
        block.setDestroySpeed(10)
        block.setRequiresTool(true)
    })
})