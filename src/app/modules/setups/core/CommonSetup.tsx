import {CommonModel} from "./_CommonModel.ts";
import {useState} from "react";
import {Table, Modal} from "antd";
import {Content} from "../../../../_metronic/layout/components/content";
import {ToolbarWrapper} from "../../../../_metronic/layout/components/toolbar";

type CommonSetupProps ={
    title: string,
    data: CommonModel[],
}
const CommonSetup = ({data, title}: CommonSetupProps)=>{

    const Columns = [
        {
            title:"Code",
            dataIndex:"code",
            key:"code"
        },
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"Created At",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"Updated At",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"Actions",
            dataIndex:"action",
            key:"action"
        }
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <>
        <ToolbarWrapper />
        <Content>
            <div className={`card mb-5 mb-xxl-8`}>
                <div className='card-body pt-9 pb-0'>
                    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                    </div>
                    <div>
                        <div className="d-flex justify-content-end align-content-end pb-7">
                            <button
                                className='btn btn-info btn-sm'
                                onClick={showModal}
                            >
                                Create New
                            </button>
                        </div>
                            <Table
                                columns={Columns}
                                dataSource={data}
                            />

                        <Modal
                            title={isModalOpen ? `Create New ${title}` : `Edit ${title}`}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <hr/>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>

                    </div>
                </div>
            </div>
        </Content>
    </>
    )
}

export {CommonSetup}