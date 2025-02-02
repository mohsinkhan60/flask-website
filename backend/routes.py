from app import app, db
from flask import request, jsonify
from models import Friend

# CRUD
# Get all friends
@app.route("/api/friends",methods=["GET"])
def get_friends():
  friends = Friend.query.all() 
  result = [friend.to_json() for friend in friends]
  return jsonify(result)

# Create a new friend
@app.route('/api/friends', methods=['POST'])
def create_friend():
    try:
        data = request.json

        # Check if all required fields are present
        required_fields = ["name", "role", "gender", "description"]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        # Create a new Friend object
        new_friend = Friend(
            name=data['name'],
            role=data['role'],
            gender=data['gender'],
            description=data['description']
        )

        # Add the new friend to the database
        db.session.add(new_friend)
        db.session.commit()

        return jsonify(new_friend.to_json()), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Delete a friend
@app.route('/api/friends/<int:id>', methods=['DELETE'])
def delete_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({'error': 'Friend not found'}), 404
        db.session.delete(friend)
        db.session.commit()
        return jsonify({'msg': 'Friend deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Update a friend
@app.route('/api/friends/<int:id>', methods=['PATCH'])
def update_friend(id):
    try:
        friend = Friend.query.get(id)
        if friend is None:
            return jsonify({'error': 'Friend not found'}), 404

        data = request.json
        friend.name = data.get('name', friend.name)
        friend.role = data.get('role', friend.role)
        friend.description = data.get('description', friend.description)
        friend.gender = data.get('gender', friend.gender)

        db.session.commit()
        return jsonify(friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Custom 404 error handler
@app.errorhandler(404)
def page_not_found(e):
    return jsonify(error="Page not found"), 404