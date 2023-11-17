:::mermaid
sequenceDiagram
    participant browser
    participant server
    Note right of browser: It creates a new note, adds it to the notes list, rerenders the note list on the page and sends the new note to the server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: The request goes with a payload (the new note)
    server-->>browser: HTTP status code 201 created
    deactivate server
:::