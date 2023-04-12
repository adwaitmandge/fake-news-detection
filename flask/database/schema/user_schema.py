import pymongo
client = pymongo.MongoClient("mongodb://localhost:27017/")

db = client["fakeNews"]

user_validator = {
      "$jsonSchema": {
         "bsonType": "object",
         "title": "Student Object Validation",
         "required": [ "username" ],
         "properties": {
            "username": {
               "bsonType": "string",
               "description": "'name' must be a string and is required"
            },
            "queries":{
                "bsonType":"array",
                "items":{
                    "bsonType":"object",
                    "properties":{
                        "query":{
                            "bsonType":"string",   
                        },
                        "result":{
                            "bsonType":"bool"
                        }
                    }
                }
            },
            "isAdmin":{
                "bsonType":"bool",
            }
         }
      }
   }

try: 
    db.create_collection("users")
except Exception as e:
    print("Error occurred while creating user_schema database")
    print(e)
    
db.command("collMod", "users", validator=user_validator)
    