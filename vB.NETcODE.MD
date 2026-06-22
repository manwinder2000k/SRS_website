







  Private Sub patientlist_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load




        Try
            OpenConn()
            GRIDFILL()
           
        Finally
            CloseConn()
        End Try
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        PATIENT.Show()
    End Sub

    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

    End Sub

    Public Sub GRIDFILL()
        Dim sql As String = "SELECT patientname,fathername,gender FROM Patients"

        Dim da As New SqlDataAdapter(sql, con)
        Dim dt As New DataTable()

        da.Fill(dt)

        DataGridView1.DataSource = dt

      

    End Sub
End Class