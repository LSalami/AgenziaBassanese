<%@ Language="VBScript" %>
<%
Response.ContentType = "application/json"
Response.Charset = "UTF-8"

Dim fso, folder, files, file, audioFiles, audioExtensions, ext, fileName, fileSize
Dim filePath, formattedSize, units, power, i

' Percorso della cartella media
Dim mediaPath
mediaPath = Server.MapPath("media")

' Estensioni audio supportate
audioExtensions = Array("mp3", "m4a", "wav", "ogg", "flac", "aac")

' Array per i file audio
audioFiles = ""

Set fso = Server.CreateObject("Scripting.FileSystemObject")

If fso.FolderExists(mediaPath) Then
    Set folder = fso.GetFolder(mediaPath)
    Set files = folder.Files

    For Each file In files
        fileName = file.Name
        ext = LCase(fso.GetExtensionName(fileName))

        ' Controlla se l'estensione è audio
        Dim isAudio
        isAudio = False
        For i = 0 To UBound(audioExtensions)
            If ext = audioExtensions(i) Then
                isAudio = True
                Exit For
            End If
        Next

        If isAudio Then
            fileSize = file.Size

            ' Formatta la dimensione del file
            units = Array("B", "KB", "MB", "GB")
            If fileSize > 0 Then
                power = Int(Log(fileSize) / Log(1024))
                If power > 3 Then power = 3
                formattedSize = Round(fileSize / (1024 ^ power), 2) & " " & units(power)
            Else
                formattedSize = "0 B"
            End If

            ' Aggiungi alla lista JSON
            If audioFiles <> "" Then audioFiles = audioFiles & ","
            audioFiles = audioFiles & "{""name"":""" & fileName & """,""size"":""" & formattedSize & """,""bytes"":" & fileSize & "}"
        End If
    Next

    Set files = Nothing
    Set folder = Nothing
End If

Set fso = Nothing

' Output JSON
Response.Write "[" & audioFiles & "]"
%>
