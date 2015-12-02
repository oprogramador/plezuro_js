function ToHtmlAndSave()
    redir => message
    silent execute 'echo system("find src/plezuro/doc -name *.plez")'
    redir END
    let files = split(message, "\n")
    for file in files
        execute 'tabedit '.file
        execute 'TOhtml'
        execute 'wq'
        execute 'q'
    endfor
    execute 'q'
endfunction
