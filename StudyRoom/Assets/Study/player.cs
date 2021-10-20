using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class player : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // This method is based on the example code from a keyboard control tutorial on Bilibili
    // https://www.bilibili.com/video/BV1VJ41147MN?p=32
    
    public float speed = 2f;

    // Update is called once per frame
    void Update()
    {
        float h = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
        float v = Input.GetAxis("Vertical") * Time.deltaTime * speed;
        Vector3 move = new Vector3(v,0,-h);
        transform.Translate(move);
    }
}
