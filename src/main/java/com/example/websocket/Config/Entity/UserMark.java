package com.example.websocket.Config.Entity;

public class UserMark {
    private Integer userid;
    private Integer totalmark;

    public UserMark(Integer userid, Integer totalmark) {
        this.userid = userid;
        this.totalmark = totalmark;
    }


    public UserMark(){

    }

    
    public Integer getUserid() {
        return userid;
    }
    public void setUserid(Integer userid) {
        this.userid = userid;
    }
    public Integer getTotalmark() {
        return totalmark;
    }
    public void setTotalmark(Integer totalmark) {
        this.totalmark = totalmark;
    }

}
