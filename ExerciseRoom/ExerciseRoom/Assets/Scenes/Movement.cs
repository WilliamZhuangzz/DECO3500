// Inspired by input method and move position tutorial
// Move postion Ref: https://www.bilibili.com/video/BV1VJ41147MN?p=29
// Input Method Ref: https://docs.unity3d.com/530/Documentation/ScriptReference/KeyCode.html
// Transform Position Ref: https://docs.unity3d.com/530/Documentation/ScriptReference/Vector3.html

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    public float smooth = 2.0F;
    public float tileAngle = 30.0F;
    

    // Update is called once per frame
    void Update()
    {
        //Detect if W is pressed
        if (Input.GetKey(KeyCode.S)){
            //Move up
            transform.position += new Vector3 (0, -1, 0);
        }
        //Detect if S is pressed
        else if (Input.GetKey(KeyCode.W)){
            //Move down
            transform.position += new Vector3 (0, 1, 0);
        }
        //Detect if A is pressed
        else if (Input.GetKey(KeyCode.D)){
            //Move left
            transform.position += new Vector3 (1, 0, 0);
        }
        //Detect if D is pressed
        else if (Input.GetKey(KeyCode.A)){
            //Move right
            transform.position += new Vector3 (-1, 0, 0);
        }
        //Detect if Q is pressed
        else if (Input.GetKey(KeyCode.Q)){
            //Move forward
            transform.position += new Vector3 (0, 0, 1);
        }
        //Detect if E is pressed
        else if (Input.GetKey(KeyCode.E)){
            //Move backward
            transform.position += new Vector3 (0, 0, -1);
        }
    }
}