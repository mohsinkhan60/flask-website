from app import app, db
from flask import request, jsonify
from models import Friend

#Get all friends
@app.route('/api/friends', methods=['GET'])
def get_friends():
    friends = Friend.query.all()
    result = [friend.to_json() for friend in friends]
    return jsonify(result)

#create a new friend
@app.route('/api/friends', methods=['POST'])
def create_friend():
    try:
        data = request.json

        required_fields = ["name", "role","gender", "description"]
        for field in required_fields:
            if field not in data:
                return jsonify({'msg': f'{field} is required'}), 400
        
        name = data.get('name')
        role = data.get('role')
        description = data.get('description')
        gender = data.get('gender')


        #For Gender
        if gender == 'male':
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == 'female':
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None


        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)
        db.session.add(new_friend)
        db.session.commit()
        return jsonify({'msg':"Friends created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'msg':str(e)}), 500