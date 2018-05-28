# StickyNotesAPI
API for Sticky Notes<br/>
Project URL :- https://stickynotesapi.herokuapp.com/ <br/>

<pre>
<h2>Search All Sticky Notes</h2><br/>
URL:  https://stickynotesapi.herokuapp.com/getStickyNotes<br/>
Method: GET

Sample Response:
{
  "noteList": [
      {
        "created_on": "2018-04-15T10:51:19.490Z",
        "id": 1,
        "name": "Sample Name",
        "title": "Sample Title",
        "notes": "Hello World!",
        "__v": 0
        }
    ]
}


<h2>Search Sticky Notes by Query Params</h2>
URL:  https://stickynotesapi.herokuapp.com/getStickyNotes?id=1

Query Params: <?id=_id, name=_name, title=_title, notes=_notes>

Method: GET

Sample Response:

  {
    "noteList": [
        {
          "created_on": "2018-04-15T10:51:19.490Z",
          "id": 1,
          "name": "Sample Name",
          "title": "Sample Title",
          "notes": "Hello World!",
          "__v": 0
          }
      ]
  }
  
<h2>Create Sticky Note</h2>
URL:  https://stickynotesapi.herokuapp.com/saveStickyNote

Method: POST

Sample Payload:

{
    "id": 1,
    "name": "Sample Name",
    "title": "Sample Title",
    "notes": "Hello World!"
}
Sample Response:

{
    "result": "Success"
}

<h2>Update Sticky Note</h2>
URL:  https://stickynotesapi.herokuapp.com/saveStickyNote

Method: PUT

Sample Payload:

{
    "id": 1,
    "name": "Sample Name",
    "title": "Sample Title",
    "notes": "Hello World!"
}
Sample Response:

{
    "result": "Success"
}

<h2>Delete Sticky Note - Single</h2>
URL:  https://stickynotesapi.herokuapp.com/deleteStickyNote

Method: DELETE

Sample Payload:

    {
        "id": 1
    }
    
Sample Response:

    {
        "result": "Success"
    }
    
<h2>Delete Sticky Note - Multiple</h2>
URL:  https://stickynotesapi.herokuapp.com/deleteStickyNote

Method: DELETE

Sample Payload:

      {
          "id": [1,2,3]
      }
      
Sample Response:

      {
          "result": "Success"
      }
      
  </pre>
