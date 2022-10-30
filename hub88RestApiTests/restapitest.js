const apiResource = require("protractor-api-resource").ProtractorApiResource

describe("Test response for all REST API methods", function () {
 
    var apiClient, serviceEnpoints = {
        getPostsRequest: {
            path: "/posts/:postId:"
        },
        getUsersRequest: {
            path: "/users/:userId:"
        },
        getCommentsRequest: {
            path: "/comments/:commentsId:"
        },
        getTodosRequest: {
            path: "/todos/:todoId:"
        },
        createPost: {
            path: "/posts",
            method: "POST"
        },
        updatePost: {
            path: "/posts/:postId:",
            method: "PUT"
        },
        patchPost: {
            path: "/posts/:postId:",
            method: "PATCH"
        },
    };
 
     beforeAll(function () {
        apiClient = new apiResource("https://gorest.co.in/public/v2/");
        apiClient.registerService(serviceEnpoints);
    });



    it("Validate retrieved posts data", function (done) {
        var expectedResponse = {
            "id": 1685,
            "user_id": 3425,
            "title": "Pecunia canis atrox sollicito virga ipsa adimpleo censura sed vulgaris vesco ipsum tenus vitiosus.",
            "body": "Tantillus voveo nisi. Vallum bibo demoror. Supplanto tersus peior. Ullam tonsor esse. Autus blanditiis paens. Et verecundia torrens. Torrens cohibeo labore. Autem maiores arbustum. Degusto copia non. Ventito volaticus nihil. Ratione catena eligendi. Suasoria aequus voluptatem. Voluptas ea consuasor. Civis verecundia deripio. Totam cibo averto. Distinctio hic asper. Quam tumultus concido. Suus aranea stella. Vulnus accommodo dolorum. Thesaurus compello non. Sint tertius validus."
            };
     
        apiClient.getPostsRequest({postId:1685}).toJSON().then(function (actualResponse) {
            console.log("Post title :"+actualResponse.title);
            expect(actualResponse).toEqual(expectedResponse);
            done();
        });

    });

    
    it("Validate retrieved user data", function (done) {
        var expectedResponse = {
            "id": 9,
            "name": "Mandaakin Jha",
            "email": "jha_mandaakin@hartmann-osinski.info",
            "gender": "female",
            "status": "inactive"
            };
     
        apiClient.getUsersRequest({userId:9}).toJSON().then(function (actualResponse) {
            console.log("User email :"+actualResponse.email);
            expect(actualResponse).toEqual(expectedResponse);
            done();
        });
    });

    it("Validate retrieved comments data", function (done) {
        var expectedResponse = {
            "id": 1670,
            "post_id": 1682,
            "name": "Anand Swarup Jha VM",
            "email": "jha_swarup_anand_vm@stark.com",
            "body": "Officiis ea sunt. Eaque ab dolore."
            };
     
        apiClient.getCommentsRequest({commentsId:1670}).toJSON().then(function (actualResponse) {
            console.log("Comments body :"+actualResponse.body);
            expect(actualResponse).toEqual(expectedResponse);
            done();
        });
    });

    it("Validate retrieved todos data", function (done) {
        var expectedResponse = {
            "id": 1670,
            "user_id": 3430,
            "title": "Volup arma ait vehemens adicio nulla arcus torqueo certo.",
            "due_on": "2022-11-06T00:00:00.000+05:30",
            "status": "pending"
            };
     
        apiClient.getTodosRequest({todoId:1670}).toJSON().then(function (actualResponse) {
            console.log("Todo title :"+actualResponse.title);
            expect(actualResponse).toEqual(expectedResponse);
            done();
        });
    });
    



});